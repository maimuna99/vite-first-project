<script setup>
const title = ref( 'My awsome Product ')
</script>
<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description"
            content="title" />
        </Head>
     This is my great project!
    {{ $route.params.slug }}   
    </div>
    
</template>