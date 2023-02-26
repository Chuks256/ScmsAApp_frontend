<template>
<NavBar />
<HeroSection /> 
<featuresSection />
<servicesSection />
</template>

<script>
import NavBar from "../components/NavBar.vue"
import HeroSection from "../components/HeroSection.vue"
import featuresSection from "../components/featuresSection.vue"
import servicesSection from "../components/servicesSection.vue"
export default{
    components:{
        NavBar,
        HeroSection,
        featuresSection,
        servicesSection
    },
    data(){
        return{
        }
    }
}
</script>