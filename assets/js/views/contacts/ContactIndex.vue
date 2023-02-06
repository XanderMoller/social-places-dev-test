<template>
    <v-container>
        <v-btn height="40" icon width="40" @click="routeToLogin">
            <v-icon color="primary">fas fa-backspace</v-icon>
            Login
        </v-btn>
        <v-row>


            <v-col cols="8">
                <v-card :loading="loading">
                    <v-card-title>
                        Contact
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <span class="text-subtitle-2">Contact Details</span>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <u-text-field v-model="contact.email_address" :readonly="loading || saving"
                                        :rules="[isRequired, isEmail]" check-url="api_contact_unique_email" dense
                                        label="Email" validate-on-blur @paste="pastePlainText" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-row>

                                    </v-row>
                                    <div style="padding-bottom: 10px">
                                        <basic-select required :items="titles" :value="contact.title"
                                            :rules="[isRequired]" item="title" label="Title"
                                            @change="onFieldChange($event, 'title')" />
                                        <p class="error--text" v-if="!this.titleError.isValid">{{
                                            this.titleError.message
                                        }}</p>

                                    </div>
                                    <v-text-field v-model="contact.name" :error-messages="errors.name"
                                        :readonly="loading || saving" color="primary" dense label="Name"
                                        :rules="[isRequired]" @input="delete errors.name" @paste="pastePlainText" />
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-text-field v-model="contact.surname" :error-messages="errors.surname"
                                        :readonly="loading || saving" :rules="[isRequired]" color="primary" dense
                                        label="Surname" @input="delete errors.surname" @paste="pastePlainText" />
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-text-field v-model="contact.phone_number" :error-messages="errors.phone_number"
                                        :readonly="loading || saving" :rules="[isRequired]" color="primary" dense
                                        label="Phone Number" @input="delete errors.phone_number"
                                        @paste="pastePlainText" />

                                    <basic-select label="Store" :items="stores ?? []" :value="contact.store"
                                        @change="onFieldChange($event, 'store')" />

                                    <Autocomplete :search="search" placeholder="Search Stores"
                                        :get-result-value="getResultValue" @submit="onSubmit">
                                        <template #result="{ result, props }">
                                            <li v-bind="props" class="autocomplete-result">
                                                <div>
                                                    {{ result.name }}
                                                </div>
                                            </li>
                                        </template>
                                    </Autocomplete>
                                    <p class="error--text" v-if="!this.storeError.isValid">{{ this.storeError.message }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn :disabled="loading" :loading="saving" color="primary" @click="save">Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <div class="text-center">
            <v-snackbar v-model="snackbar" :timeout="timeout">
                {{ text }}
                <template v-slot:action="{ attrs }">
                    <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
    </v-container>

</template>

<script>
import { validationRulesMixin } from "~/mixins/validation-rules-mixin";
import { pastePlainTextMixin } from "~/mixins/paste-plain-text-mixin";
import UTextField from "~/components/general/UTextField";
import UrlAutocomplete from "~/components/general/UrlAutocomplete";
import BasicSelect from "~/components/general/BasicSelect";
import httpClient from "~/classes/httpClient";
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

export default {
    name: "ContactIndex",
    components: { UrlAutocomplete, UTextField, BasicSelect, Autocomplete },
    mixins: [validationRulesMixin, pastePlainTextMixin],
    data() {
        return {
            snackbar: false,
            text: '',
            timeout: 2000,
            contact: {
                title: "",
                store: "",
            },
            titles: ['Mr', "Mrs", "Miss", "Ms"],
            titleError: {
                isValid: true,
                message: "Please select a title"
            },
            errors: {},
            storeError: {
                isValid: true,
                message: "Please select a store"
            },
            stores: [],
            saving: false,
            loading: false,
            loadingItems: {
                primaryRole: false
            }
        }
    },
    methods: {
        async save() {
            this.saving = true;
            this.titleError.isValid = this.contact.title ? true : false;
            this.storeError.isValid = this.contact.store ? true : false;
            if (!this.titleError.isValid || !this.storeError.isValid) {
                this.saving = false;
                return;
            }

            await httpClient.post('api_contact_create', this.contact).then((response) => {
                this.text = response.data;
                this.snackbar = true;
            }).finally(() => {
                this.saving = false;
                rthis.$router.go();
            });


        },
        onFieldChange(event, field) {
            this.contact[field] = event;
        },
        routeToLogin() {
            this.$router.push('login');
        },
        search(input) {
            return new Promise((resolve) => {
                if (input.length < 5) {
                    return resolve([])
                }
                httpClient.get('api_stores_string_query', { input: input }).then(({ data: { stores } }) => {
                    resolve(stores[0]);
                }).catch((error) => {
                    this.error = error;
                });
            });


        },
        getResultValue(result) {
            if (!result) return [];
            return result.name
        },
        onSubmit(result) {
            this.contact.store = result.id;
        },
    },
}
</script>

<style scoped>
</style>
