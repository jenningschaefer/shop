/**
 * @file tests/component/UI/dialog.spec.ts
 * @description Component tests for Dialog
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Dialog from '~/components/UI/dialog.vue'

describe('Dialog', () => {
  it('should not render when inactive', async () => {
    const wrapper = await mountSuspended(Dialog, {
      props: {
        modelValue: false,
      },
    })

    expect(wrapper.find('.dialog').exists()).toBe(false)
    expect(wrapper.find('.overlay').exists()).toBe(false)
  })

  it('should render when active', async () => {
    const wrapper = await mountSuspended(Dialog, {
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.find('.dialog').exists()).toBe(true)
    expect(wrapper.find('.overlay').exists()).toBe(true)
  })

  it('should render header, content, and footer slots', async () => {
    const wrapper = await mountSuspended(Dialog, {
      props: {
        modelValue: true,
      },
      slots: {
        title: '<h2>Test Title</h2>',
        content: '<p>Test Content</p>',
        footer: '<button>OK</button>',
      },
    })

    expect(wrapper.find('.dialog_header').text()).toContain('Test Title')
    expect(wrapper.find('.dialog_content').text()).toContain('Test Content')
    expect(wrapper.find('.dialog_footer').text()).toContain('OK')
  })

  it('should have close button', async () => {
    const wrapper = await mountSuspended(Dialog, {
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.find('.closebtn').exists()).toBe(true)
  })

  it('should emit update:modelValue when close button clicked', async () => {
    const wrapper = await mountSuspended(Dialog, {
      props: {
        modelValue: true,
      },
    })

    await wrapper.find('.closebtn').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })
})
