<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* 全局样式 */
body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  padding-top: 1rem;
}

.container {
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

.section {
  padding: 4rem 0;
}

.heading {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
}

.subheading {
  font-size: 1.25rem;
  color: #718096;
  margin-bottom: 3rem;
}

.nav-link-3d {
  transition: transform 0.2s, color 0.2s;
}

.nav-link-3d:hover {
  transform: translateY(-2px);
}

.icon-3d {
  transition: transform 0.2s;
}

.icon-3d:hover {
  transform: scale(1.2);
}

.card-3d {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card-3d:hover {
  transform: translateY(-5px);
}

.tag-3d {
  transition: transform 0.2s;
}

.tag-3d:hover {
  transform: translateY(-2px);
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 