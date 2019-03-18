import { mount } from '@vue/test-utils'
import IncreaseFontSize from '../../src/components/IncreaseFontSize.vue'
import IncrementButton from '../../src/components/IncrementButton.vue'


describe('IncreaseFontSize.vue', function(){
	it('should display font size when passing props', function(){
		const wrapper = mount(IncreaseFontSize, {
			propsData: {
				fontSize: 40
			}
		});

		const fontSize = wrapper.find('span');
		expect(fontSize.text()).toBe('40px');
	});

	it('should update font size by 1 when emitting an increment event', function(){
		const wrapper = mount(IncreaseFontSize, {
			propsData: {
				fontSize: 40
			}
		});

		const buttonWrapper = wrapper.find(IncrementButton);
		buttonWrapper.vm.$emit('increment');
		const fontSize = wrapper.find('span');
		expect(fontSize.text()).toBe('41px');
	});
});