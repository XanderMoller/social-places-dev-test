<?php

namespace App\Controller\Application;

use App\Entity\Contact;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Services\MailService;
use App\Services\StoreService;
use App\Services\UserService;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Store;

class ContactController extends AbstractController
{
    public function __construct(protected EntityManagerInterface $entityManager) {
    }


    #[Route('/contact', name: 'contact')]
    public function index(): Response
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }
    #[Route('/api/contacts/create', name: 'create_contact', methods: 'POST')]
    public function createContact(Request $request, ValidatorInterface $validator, MailerInterface $mailer): Response
    {

        $contact = new Contact();
        $contact->setName($request->get('name'));
        $contact->setSurname($request->get('surname'));
        $contact->setPhoneNumber($request->get('phone_number'));
        $contact->setTitle($request->get('title'));

        $store = $this->entityManager->getRepository(Store::class)->find((int)$request->get('store'));
        $contact->setStore($store);
        $contact->setEmailAddress($request->get('email_address'));

        $errors = $validator->validate($contact);
        $errorsPresent = count($errors) > 0;
        if ($errorsPresent) {
            $errorsString .= (string) $errors;
            return $this->json(['errors' => [$errorsString]], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $this->entityManager->persist($contact);
        $this->entityManager->flush();

        $users = $this->entityManager->getRepository(User::class);

        $admins = $users->findUsersByRole("ROLE_ADMIN");
        $adminEmailAddresses = array_map(function ($admin) {
            return $admin->getUsername();
        }, $admins);

        $contactDetails = "(" . $contact->getId() .") -" . $contact->getName() . " " . $contact->getSurname();
        $storeDetails = "(" . $request->get('store') .") -"  . $store->getName();
        (new \Symfony\Component\Mime\Email())
        ->from('support@socialplaces.io')
        ->to(...$adminEmailAddresses)
        ->subject("New Contact Created Alert")
        ->text("New Contact Created:" . $contactDetails .'<br>' .$storeDetails);

        return new Response('Saved new contact with id '.$contact->getId(), Response::HTTP_CREATED);
    }

    #[Route('/api/contacts/unique', name: 'api_contact_unique_email', methods: 'POST')]
    public function checkContactUniqueness(Request $request): JsonResponse {
        $email = $request->get('value');

        $emailAddressCount = $this->entityManager->getRepository(Contact::class)->count(['email_address' => $email]);

        if ($emailAddressCount > 0) {
            return $this->json(['errors' => ['This value is already used.']], Response::HTTP_PRECONDITION_FAILED);
        }
 
        return $this->json([], Response::HTTP_OK);
    }
}
