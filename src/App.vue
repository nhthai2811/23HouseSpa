<template>
  <v-layout class="d-block">
    <v-app-bar
      class="header"
      scroll-behavior="fade-image"
      scroll-threshold="1000"
      image="img/app_bar.jpg"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title class="header-title">23 HOUSE SPA</v-app-bar-title>
    </v-app-bar>

    <RouterView class="main" />

    <v-footer class="footer d-block">
      <div class="infomation">
        <div class="socials text-center">
          <div v-for="icon in icons" :key="icon.icon" class="icon mr-2">
            <a :href="icon.link" target="_blank">
              <v-icon :icon="icon.icon"></v-icon>
            </a>
          </div>
        </div>

        <div class="mb-5">
          <div class="footer-title">Giới thiệu về 23 House Spa:</div>
          <div>
            #23House là nơi điều trị mụn - Chăm sóc, tái tạo da chuyên sâu - Gội đầu - Massage thư
            giản xả stress
          </div>
        </div>

        <div>
          <div class="footer-title">Giờ mở cửa:</div>
          <div>08:30 - 20:00</div>
          <div>Từ thứ 2 - Chủ nhật</div>
        </div>

        <div class="branchs">
          <div>Danh sách chi nhánh:</div>
          <div class="branch-list" v-for="branch in branchs" :key="branch.name">
            <div class="branch-name footer-title">{{ branch.name }}</div>
            <div class="branch-address">{{ branch.address }}</div>
          </div>
        </div>
        <div class="d-flex justify-center my-4">
          <span>{{ new Date().getFullYear() }}</span>
          <span class="mx-2">—</span>
          <strong>23 House - Beauty & Spa</strong>
        </div>
      </div>
    </v-footer>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const icons = reactive([
      { icon: 'mdi-facebook', link: 'https://www.facebook.com/23HouseSpa' },
      { icon: 'mdi-instagram', link: 'https://www.instagram.com/23housebymi/' }
    ])

    const branchs = reactive([
      {
        name: 'Dĩ An',
        address: '254M Võ Thị Sáu, Tây A , Đông Hoà, Dĩ An, Bình Dương Thành phố Hồ Chí Minh 81000'
      },
      {
        name: 'Lái Thiêu',
        address: 'Đường 3/2, Long Thới, Lái Thiêu, Thuận An An Thuan, Bình Dương'
      },
      {
        name: 'Thủ Dầu 1',
        address: '1148 Cách Mạng Tháng 8, Phú Thọ Thủ Dầu Một, Bình Dương 8100'
      },
      {
        name: 'Thủ Đức',
        address:
          'Shop House Block 2 Chung cư Chương Dương, 34 Đ. Số 12, Trường Thọ Thủ Đức, Ho Chi Minh City'
      }
    ])

    return { icons, branchs }
  }
})
</script>

<style lang="scss" scoped>
.header {
  font-weight: 700;
  color: #8c6f5f !important;

  .header-title {
    font-size: 26px;
  }
}

.main {
  width: 100vw;
  height: 100vh;
  background-color: #ddd5c6;
}

.footer {
  height: 100px;
  width: 100vw;
  background-color: #fff1c9;

  .footer-title {
    font-size: 20px;
    font-weight: bold;
  }
  .socials {
    display: flex;
    justify-content: center;

    .icon {
      a {
        color: #000;
      }
    }
  }

  .infomation {
    .branchs {
      .branch-list {
        .branch-name {
          font-size: 20px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .main {
    padding: 0 20%;
  }
}

@media (min-width: 1600px) {
  .main {
    padding: 0 30%;
  }
}
</style>
