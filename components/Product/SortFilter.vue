<script setup></script>

<template>
    <div class="sort-filter">
        <UIAccordion>
            <UIAccordion-item>
                <template #accordion-trigger>
                    <span class="sort-filter_heading links">Sort</span>
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
                    <span class="sort-filter_heading links">Filter</span>
                </template>
                <template #accordion-content>
                    <ul class="sort-filter_list subtitle-small">
                        <li>Chair</li>
                        <li>Tables</li>
                        <li>Lighting</li>
                        <li>Decoration</li>
                    </ul>
                </template>
            </UIAccordion-item>
        </UIAccordion>



    </div>
</template>