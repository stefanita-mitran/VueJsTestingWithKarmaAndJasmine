import { mount } from '@vue/test-utils'
import Example from '../../src/components/Example.vue'

describe('Example', function(){
	it('should render when mounted', function(){
		const wrapper = mount(Example);
		expect(wrapper.isEmpty()).toBe(true);
	});
});