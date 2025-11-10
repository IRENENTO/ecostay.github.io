<template>
<div style="border:1px solid #eee;padding:12px;border-radius:8px;">
<h3>{{ listing.title }}</h3>
<p style="color:#666">{{ listing.location.address }}</p>
<p>{{ listing.description }}</p>
<div style="margin-top:8px;font-weight:600;">Green Score: {{ listing.greenScore }}</div>
</div>
</template>


<script setup>
const props = defineProps({ listing: Object });
</script>