<script setup>
  const props = defineProps([ 'customClass' ]);
  let tabContainer = ref(null);
  let tabHeaders = ref(null);
  let tabs = ref(null);
  let activeTabIndex = ref(0);

  onMounted(() => {
    tabs.value = [ ...tabContainer.value.querySelectorAll('.tab') ];
		for(let x of tabs.value) {
	    if(x.classList.contains('active')) {
				activeTabIndex = tabs.value.indexOf(x);
			}
    }
  })
  const changeTab = (index) => {
    activeTabIndex = index;
    for(let x of [...tabs.value, ...tabHeaders.value]) {
   		x.classList.remove('active')
    }
		tabs.value[activeTabIndex].classList.add('active')  
		tabHeaders.value[activeTabIndex].classList.add('active')  
  }
</script>

<template>
  <div id="tabs-container" class="tabs" :class="customClass" ref="tabContainer">
    <div id="tab-headers" class="tabs_headers">
      <ul>
        <!-- this shows all of the titles --> 
        <li v-for="(tab, index) in tabs" :key="index" :class="activeTabIndex == index ? 'active' : ''" @click="changeTab(index)" ref="tabHeaders"><h5>{{ tab.title }}</h5></li>
      </ul>
    </div>
    <!-- this is where the tabs go, in this slot -->
    <div id="active-tab" class="tabs_active">
    	<slot></slot>
    </div>
  </div>
</template>