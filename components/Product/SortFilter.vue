<script setup></script>

<template>
    <div class="sort-filter">
        <UIAccordion>
            <UIAccordion-item>
                <template #accordion-trigger>
                    <div class="sort-filter_heading">
                        <span class="links">Sort</span>
                    </div>
                </template>
                <template #accordion-content>
                    <ul class="sort-filter_list subtitle-small">
                        <li>Price</li>
                        <li>Categories</li>
                    </ul>
                </template>
            </UIAccordion-item>

            <UIAccordion-item>
                <template #accordion-trigger>
                    <div class="sort-filter_heading">
                        <span class="links">Filter</span>
                    </div>
                </template>
                <template #accordion-content>
                    <ul class="sort-filter_list subtitle-small">
                        <li><NuxtLink to="/products/list/chairs">Chair</NuxtLink></li>
                        <li><NuxtLink to="/products/list/tables">Tables</NuxtLink></li>
                        <li><NuxtLink to="/products/list/ligting">Lighting</NuxtLink></li>
                        <li><NuxtLink to="/products/list/decoration">Decoration</NuxtLink></li>
                    </ul>
                </template>
            </UIAccordion-item>
        </UIAccordion>
        <button class="vesta-btn sort-filter_btn" type="button">Apply</button>
    </div>
</template>