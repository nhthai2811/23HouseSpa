<template>
  <main class="products-containter">
    <v-layout>
      <v-row>
        <v-col class="products" v-for="i in 10" :key="i" xs="12" sm="6" md="4" lg="3" xl="2">
          <v-card
            :disabled="loading"
            :loading="loading"
            class="product-card mt-10 mx-auto"
            max-width="374"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" src="img/sample_card.jpg" cover></v-img>

            <v-card-item>
              <v-card-title>Liệu pháp da trắng</v-card-title>

              <v-card-subtitle>
                <span class="me-1">Yêu thích</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="4.5"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                ></v-rating>

                <div class="text-grey ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">$100</div>

              <div>Liệu pháp da trắng rạng rỡ với Vitamin C (75 phút)</div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <v-card-title>Lịch trống</v-card-title>

            <div class="px-4 mb-2">
              <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </div>

            <v-card-actions>
              <v-btn
                color="deep-purple-lighten-2"
                text="Reserve"
                block
                border
                @click="reserve"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
    <div class="space"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const selection = reactive({})
    const loading = ref(false)
    const reserve = () => {
      console.log(selection)
    }

    return { selection, loading, reserve }
  }
})
</script>


<style lang="scss">
.products-containter {
  padding: 0 20px !important;

  .products {
    .product-card {
      background-color: #fffcf7;
    }
  }

  .space {
    height: 40px;
  }
}
</style>
