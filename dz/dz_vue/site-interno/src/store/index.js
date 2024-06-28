export default {
  state: {
    // Начальное состояние
    selectedCategory: 'Спальня',
    items_project: [
      {
        id: 1,
        image: '/img_project/project_badroom_1.jpeg',
        title: 'Минималистичная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 2,
        image: '/img_project/project_badroom_2.jpeg',
        title: 'Минималистичная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 3,
        image: '/img_project/project_badroom_1.jpeg',
        title: 'Классическая спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 4,
        image: '/img_project/project_badroom_4.jpeg',
        title: 'Современная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 5,
        image: '/img_project/project_badroom_5.jpeg',
        title: 'Минималистичный прикроватный столик',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 6,
        image: '/img_project/project_badroom_6.jpeg',
        title: 'Столы и столики',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 7,
        image: '/img_project/project_badroom_7.jpeg',
        title: 'Современная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 8,
        image: '/img_project/project_badroom_8.jpeg',
        title: 'Современная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      }
    ],
    slides: [
      {
        id: 1,
        src: '/slider/slired_photo_1.jpeg',
        title: 'Минималистическая спальня',
        desc_text: 'Декор / Планировка'
      },
      {
        id: 2,
        src: '/slider/slired_photo_2.jpeg',
        title: 'Минималистическая спальня',
        desc_text: 'Декор / Планировка'
      },
      {
        id: 3,
        src: '/slider/slired_photo_3.jpeg',
        title: 'Минималистическая спальня',
        desc_text: 'Декор / Планировка'
      }
    ],
    currentImageIndex: 0
  },
  mutations: {
    // Методы для изменения состояния
    SET_CATEGORY (state, category) {
      state.selectedCategory = category
    },
    SET_CURRENT_IMAGE_INDEX (state, index) {
      state.currentImageIndex = index
    }
  },
  getters: {
    // Методы для чтения состояния
    filteredItems: (state) => {
      if (state.selectedCategory === 'все проекты') {
        return state.items_project
      }
      return state.items_project.filter(item => item.category === state.selectedCategory)
    },
    currentImage (state) {
      return state.slides[state.currentImageIndex]
    },
    totalImages (state) {
      return state.slides.length
    }
  },
  actions: {
    // Методы для асинхронных операций
  }
}
