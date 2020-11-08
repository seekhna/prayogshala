<template>
<v-row justify="center" align="center">
    <v-col cols="12">
        <div class="text-left">
            <averx-logo />
        </div>
        <v-card>
            <v-card-title class="headline">
                Welcome to Averx Drugs Private Limited!
            </v-card-title>
            <v-card-text>
                <p>Averx Drugs Private Limited is a company that is wanting to be the leader in bulk drugs.</p>
                <hr class="my-3">
            </v-card-text>
            <v-card-actions>
                <v-spacer />
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
import AverxLogo from '~/components/AverxLogo.vue'

export default {
    components: {
        AverxLogo
    }
}
</script>
