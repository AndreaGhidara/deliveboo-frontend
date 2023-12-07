<script>

export default {
    name: 'AppSpecificCategory.vue',
    computed(){

        // destination(){
        //     return sourceData.destination.find(
        //         (destination) => destination.id == parseInt(this.id)
        //     )
        // }

    },
    data() {
        return {
            
        }
    },
    methods: {

    },
    created() {
        
    },
}
</script>

<template>
    <div>
        <h1>specifc Categories {{ $route.params.id }}</h1>
    </div>
</template>

<style lang="scss" scoped>

</style>