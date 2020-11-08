export { default as AverxLogo } from '../../components/AverxLogo.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyAverxLogo = import('../../components/AverxLogo.vue' /* webpackChunkName: "components/AverxLogo" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo" */).then(c => c.default || c)
