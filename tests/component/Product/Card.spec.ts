/**
 * @file tests/component/Product/Card.spec.ts
 * @description Component tests for Product Card
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProductCard from '~/components/Product/Card.vue'
import type { Product } from '~/types'

const mockProduct: Product = {
  id: 1,
  name: 'Test Chair',
  name_url: 'test-chair',
  description: 'A comfortable test chair',
  category: 'chairs',
  type: 'chairs',
  price: '199.99',
  price_us: '199.99',
  price_eur: '189.99',
  currency: '€',
  img: '/img/products/chairs/test.jpg',
  features: ['Feature 1', 'Feature 2'],
  spec_title: 'Specifications',
  spec_text: 'Material: Wood',
}

describe('ProductCard', () => {
  it('should render product name', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        product: mockProduct,
      },
    })

    expect(wrapper.text()).toContain('Test Chair')
  })

  it('should render product price with currency', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        product: mockProduct,
      },
    })

    expect(wrapper.text()).toContain('199.99')
    expect(wrapper.text()).toContain('€')
  })

  it('should emit favor event on heart click', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        product: mockProduct,
      },
    })

    const heartIcon = wrapper.find('.product-card_img_icon')
    await heartIcon.trigger('click')

    expect(wrapper.emitted('favor')).toBeTruthy()
    expect(wrapper.emitted('favor')?.[0]).toEqual([1])
  })

  it('should show active class when favored', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        product: mockProduct,
        favored: true,
      },
    })

    const heartIcon = wrapper.find('.product-card_img_icon')
    expect(heartIcon.classes()).toContain('active')
  })

  it('should not show active class when not favored', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        product: mockProduct,
        favored: false,
      },
    })

    const heartIcon = wrapper.find('.product-card_img_icon')
    expect(heartIcon.classes()).not.toContain('active')
  })

  it('should have correct product card structure', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        product: mockProduct,
      },
    })

    expect(wrapper.find('.product-card').exists()).toBe(true)
    expect(wrapper.find('.product-card_img').exists()).toBe(true)
    expect(wrapper.find('.product-card_name').exists()).toBe(true)
    expect(wrapper.find('.product-card_price').exists()).toBe(true)
  })
})
