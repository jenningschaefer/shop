/**
 * @file tests/component/Order/Card.spec.ts
 * @description Component tests for Order Card
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import OrderCard from '~/components/Order/Card.vue'
import type { Order } from '~/types'

const mockOrder: Order = {
  order_id: '000001',
  user_id: 1,
  order_date: '20240115',
  shipping_date: '20240118',
  status: 'Delivered',
  sum: '199.99',
  shipping: '9.99',
  payment_type: 'Credit Card',
  delivery_type: 'Standard',
  delivery_time: '3-5 days',
  products: [
    {
      id: 1,
      name: 'Test Product',
      img: '/img/test.jpg',
      price: 199.99,
      amount: 1,
    },
  ],
}

describe('OrderCard', () => {
  it('should render order id', async () => {
    const wrapper = await mountSuspended(OrderCard, {
      props: {
        order: mockOrder,
      },
    })

    expect(wrapper.text()).toContain('000001')
  })

  it('should have correct structure', async () => {
    const wrapper = await mountSuspended(OrderCard, {
      props: {
        order: mockOrder,
      },
    })

    expect(wrapper.find('.order-card').exists()).toBe(true)
    expect(wrapper.find('.order-card_heading').exists()).toBe(true)
    expect(wrapper.find('.order-card_status').exists()).toBe(true)
    expect(wrapper.find('.order-card_info').exists()).toBe(true)
  })

  it('should link to order detail page', async () => {
    const wrapper = await mountSuspended(OrderCard, {
      props: {
        order: mockOrder,
      },
    })

    const link = wrapper.find('.order-card_heading')
    expect(link.attributes('to') || link.attributes('href')).toContain('order-000001')
  })

  it('should display order sum', async () => {
    const wrapper = await mountSuspended(OrderCard, {
      props: {
        order: mockOrder,
      },
    })

    expect(wrapper.text()).toContain('199.99')
  })
})
