<script lang="ts">
	import slider from '$lib/images/icon-slider.svg';
</script>

<input
	type="range"
	name="price_2"
	id="price_2"
	class="w-full my-8 md:col-span-2"
	style:--slider-icon="url('{slider}')"
/>

<style lang="postcss">
	input[type='range'] {
		-webkit-appearance: none;
		@apply bg-transparent;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-image: var(--slider-icon);
		@apply h-11 w-11 rounded-full bg-cyan-strong cursor-pointer shadow-xl shadow-cyan-soft -mt-4 bg-1/2 bg-center bg-no-repeat;
	}
	input[type='range']::-webkit-slider-runnable-track {
		@apply w-full h-2 cursor-pointer bg-light-grayish-blue rounded-md;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		@apply bg-cyan-soft;
	}

	input[type='range']::-moz-range-thumb {
		background-image: var(--slider-icon);
		@apply h-11 w-11 rounded-full bg-cyan-strong cursor-pointer shadow-xl shadow-cyan-soft bg-1/2 bg-center bg-no-repeat;
	}
	input[type='range']::-moz-range-track {
		@apply w-full h-2 cursor-pointer bg-light-grayish-blue rounded-md;
	}

	input[type='range']::-ms-thumb {
		background-image: var(--slider-icon);
		@apply h-11 w-11 rounded-full bg-cyan-strong cursor-pointer shadow-xl shadow-cyan-soft bg-1/2 bg-center bg-no-repeat;
	}
	input[type='range']::-ms-track {
		@apply w-full h-2 cursor-pointer bg-transparent text-transparent;
	}
	input[type='range']::-ms-fill-lower {
		@apply bg-light-grayish-blue rounded-md;
	}
	input[type='range']:focus::-ms-fill-lower {
		background: #3071a11;
	}
	input[type='range']::-ms-fill-upper {
		@apply bg-cyan-soft rounded-md;
	}
	input[type='range']:focus::-ms-fill-upper {
		background: #367ebd;
	}

	input[type='range']:focus {
		outline: none;
	}

	input[type='range']::-ms-track {
		@apply w-full cursor-pointer bg-transparent border-transparent text-transparent;
	}
</style>
