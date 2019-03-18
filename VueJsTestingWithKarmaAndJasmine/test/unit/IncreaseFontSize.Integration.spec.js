import { mount } from '@vue/test-utils'
import IncreaseFontSize from '../../src/components/IncreaseFontSize.vue'

describe('IncreaseFontSize.vue component', function(){
	it('should increase font size after button is clicked', function(){
		const wrapper = mount(IncreaseFontSize, {
			propsData: {
				fontSize: 40
			}
		});

		wrapper.find('button').trigger('click');
		const fontSize = wrapper.find('span');
		expect(fontSize.text()).toBe('41px');
	});
});