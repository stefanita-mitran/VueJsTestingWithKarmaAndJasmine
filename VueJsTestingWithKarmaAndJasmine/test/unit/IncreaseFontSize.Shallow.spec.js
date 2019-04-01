import { mount } from '@vue/test-utils'
import IncreaseFontSize from '../../src/components/IncreaseFontSize.vue'
import IncrementButton from '../../src/components/IncrementButton.vue'
import FontSize from '../../src/components/FontSize.vue'


describe('IncreaseFontSize.vue', function(){
	it('should pass the "fontSize" prop down to "FontSize" component', function(){
		var wrapper = mount(IncreaseFontSize, {
			propsData: {
				fontSize: 40
			}
		});

		var fontSizeWrapper = wrapper.find(FontSize);
		expect(fontSizeWrapper.props().sizeOfFont).toBe(40);
	});

	it('should update "sizeOfFont" prop by 1 when emitting an "increment" event', function(){
		var wrapper = mount(IncreaseFontSize, {
			propsData: {
				fontSize: 40
			}
		});

		var buttonWrapper = wrapper.find(IncrementButton);
		buttonWrapper.vm.$emit('increment');
		expect(wrapper.props().fontSize).toBe(41);
	});
});

describe('IncreaseFontSize.vue', () => {
	describe('IncreaseButton.vue', () => {
		describe(':props', () => {
			it(':text - should be displayed as the buttons text when passed in as props', () => { /* test */});
		});
		describe('@events', () => {
			it('@increment - should dispatch an "increment" event when button is clicked', () => { /* test */ });
		});
	});

	describe('FontSize.vue', () => {
		describe(':props', () => {
			it(':sizeOfFont - should be displayed as text with "px" suffix', () => {/* test */});
		});
	});
});