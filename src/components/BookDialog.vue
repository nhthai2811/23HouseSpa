<template>
  <v-layout class="book-container">
    <div class="pa-4 text-center">
      <v-dialog v-model="localDialog" max-width="600">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-none font-weight-regular"
            prepend-icon="mdi-account"
            text="Đặt lịch"
            variant="tonal"
            v-bind="activatorProps"
          ></v-btn>
        </template>

        <v-card prepend-icon="mdi-account" title="Đặt lịch">
          <v-card-text>
            <v-row dense>
              <v-col cols="12">
                <v-text-field label="Họ và tên*" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Số điện thoại*" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field type="date"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea label="Ghi chú"></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="closeDialog(false)" text="Đóng" variant="plain"></v-btn>

            <v-btn @click="closeDialog(true)" color="primary" text="Gửi" variant="tonal"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from 'vue'

export default defineComponent({
  props: {
    showBookDialog: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const localDialog = toRef(props, 'showBookDialog')
    const form = ref({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
      interests: []
    })
    const showPicker = ref(false)
    const selectedDate = ref(null)

    const closeDialog = (save: boolean) => {
      if (save) {
        emit('save', form.value)
      } else {
        emit('cancel')
      }
    }

    return { localDialog, form, showPicker, selectedDate, closeDialog }
  }
})
</script>

<style lang="scss">
</style>
