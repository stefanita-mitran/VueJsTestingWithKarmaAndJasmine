import { mount } from '@vue/test-utils'
import FontSize from '../../src/components/FontSize.vue'

describe('FontSize component', function(){
	it('should display font size in pixel when rendered with props', function(){
		const wrapper = mount(FontSize, {
			propsData: {
				sizeOfFont: 33
			}
		});

		expect(wrapper.text()).toBe('33px');
	});
});