<template>
  <div>
    <div class="slider">
      <div class="image_container">
        <img :src="currentImage.src" alt="currentImage.title" ref="image">
        <div class="zoom_icon">
          <button @click="zoomImage"></button>
        </div>
      </div>
      <div class="pagination">
        <button v-for="(image, index) in totalImages" :key="index.id" @click="setCurrentImageIndex(index)"
          :class="{ active: index === currentImageIndex }">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentImageIndex']),
    ...mapGetters(['currentImage', 'totalImages'])
  },
  methods: {
    ...mapMutations(['SET_CURRENT_IMAGE_INDEX']),
    setCurrentImageIndex (index) {
      this.SET_CURRENT_IMAGE_INDEX(index)
    },
    zoomImage () {
      const image = this.$refs.image
      const isZoomed = image.classList.contains('zoomed')
      if (isZoomed) {
        image.classList.remove('zoomed')
      } else {
        image.classList.add('zoomed')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slider_comtainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 1200px;
  border-radius: 68px;
  overflow: hidden;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.image_container {
  position: relative;
  width: 100%;
  max-width: 1200px;
}

.image_container img {
  width: 100%;
  height: 800px;
  border-radius: 68px;
  transition: transform 0.3s ease;
}
.image_container img.zoomed {
  transform: scale(1.5);
  z-index: 1000;
}
.zoom_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.image_container:hover .zoom_icon {
  opacity: 1;
}
.zoom_icon  button {
    background-image: url('@/assets/image/img/zoom.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ffffff;
    border-radius: 50%;
    border: none;
    width: 132px;
    height: 132px;
    cursor: pointer;
  }
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  width: 20px;
  height: 20px;
  border: 2px solid #292F36;
  background-color: transparent;
  color: #292F36;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #81807d;
  border: none;
}</style>
