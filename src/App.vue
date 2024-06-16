<template>
  <v-layout class="d-block">
    <v-app-bar
      class="header"
      scroll-behavior="fade-image"
      scroll-threshold="1000"
      image="img/app_bar.jpg"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title class="header-title">23 HOUSE SPA</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer class="side-bar" v-model="drawer" location="left" temporary>
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          :value="item"
          :active="item.path === $route.path"
          :to="item.path"
          color="primary"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div class="mt-15">
      <!-- <v-breadcrumbs class="breadcrumbs" :items="['Trang chủ']"> </v-breadcrumbs> -->
      <RouterView class="main" />
    </div>

    <v-footer class="footer d-block">
      <div class="v-row infomation justify-center">
        <div class="v-col-12 socials text-center">
          <div v-for="icon in icons" :key="icon.icon" class="icon mr-2">
            <a :href="icon.link" target="_blank">
              <v-icon :icon="icon.icon"></v-icon>
            </a>
          </div>
        </div>

        <div xs="12" md="6" class="mb-5 mx-5">
          <div class="footer-title">Giới thiệu về 23 House Spa:</div>
          <div>
            #23House là nơi điều trị mụn - Chăm sóc, tái tạo da chuyên sâu - Gội đầu - Massage thư
            giản xả stress
          </div>
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.557173579135!2d106.77309146817056!3d10.900327230591147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d920fc351d45%3A0x1fa940ad0c148c64!2s23%20House%20Spa%20D%C4%A9%20An!5e0!3m2!1svi!2s!4v1718546408527!5m2!1svi!2s"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="branchs mx-5">
          <div>
            <div class="footer-title">Giờ mở cửa:</div>
            <div>08:30 - 20:00</div>
            <div>Từ thứ 2 - Chủ nhật</div>
          </div>
          <div>Danh sách chi nhánh:</div>
          <div class="branch-list" v-for="branch in branchs" :key="branch.name">
            <div class="branch-name footer-title">{{ branch.name }}</div>
            <div class="branch-address">{{ branch.address }}</div>
          </div>
        </div>
        <div class="v-col-12 d-flex justify-center my-4">
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

    const menus = reactive([
      {
        title: 'Giới thiệu',
        path: '/',
        name: 'intro'
      },
      {
        title: 'Dịch vụ',
        path: '/service',
        name: 'service'
      },
      { title: 'Sản phẩm', path: '/products', name: 'products' },
      {
        title: 'Tuyển dụng',
        path: '/recruitment',
        name: 'recruitment'
      },
      { title: 'Liên hệ', path: '/contact', name: 'contact' }
    ])

    const drawer = ref(false)

    return { icons, branchs, menus, drawer }
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

.side-bar {
  background-color: #fffae6;

  .v-navigation-drawer__content {
    .v-list {
      .v-list-item {
        &:hover {
          transition-duration: 0ms;
          color: #8c6f5f !important;
          .v-list-item-title {
            font-weight: bold !important;
          }
        }
      }
      .v-list-item--active {
        color: #8c6f5f !important;

        .v-list-item-title {
          font-weight: bold !important;
        }
      }
    }
  }
}

.main {
  width: 100vw;
  background-color: #ddd5c6;
}

.footer {
  height: 100px;
  width: 100vw;
  background-color: #fffae6;

  .footer-title {
    font-size: 20px;
    font-weight: bold;
  }

  .google-map {
    width: 100%;
    height: 300px;
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
