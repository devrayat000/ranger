<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Card from 'flowbite-svelte/cards/Card.svelte';
	import Button from 'flowbite-svelte/buttons/Button.svelte';

	import Slider from '$lib/components/slider.svelte';
	import Switch from '$lib/components/switch.svelte';
	import Offer from '$lib/components/offer.svelte';
	import bg from '$lib/images/bg-pattern.svg';
	import pattern from '$lib/images/pattern-circles.svg';
</script>

<main class="p-6 min-h-screen grid items-center md:justify-center relative">
	<div
		class="absolute top-0 left-0 w-full grid place-items-center pt-14 pb-20 bg bg-cover bg-no-repeat"
		style:--bg-pattern="url('{bg}')"
	>
		<img src={pattern} alt="Pattern" class="absolute top-1/4 left-1/3" />
		<section class="flex flex-col items-center z-10">
			<h2 class="text-2xl text-dark-desaturated-blue font-extrabold leading-10">
				Simple, traffic-based pricing
			</h2>
			<p class="mt-3 text-base text-grayish-blue">Sign-up for our 30-day trial.</p>
			<p class="mt-1 text-base text-grayish-blue">No credit card required.</p>
		</section>
	</div>
	<Card class="shadow-xl border-none py-12 md:px-9 md:py-10 z-10 md:min-w-max md:mt-32">
		<section class="grid md:grid-cols-2 items-center md:justify-between gap-x-20">
			<h4 class="text-grayish-blue text-sm text-center tracking-widest uppercase font-extrabold">
				100k Previews
			</h4>
			<Slider />
			<p
				class="text-sm text-grayish-blue font-semibold mt-2 flex items-center justify-center gap-1 md:col-start-2 md:row-start-1"
			>
				<span class="text-dark-desaturated-blue text-3xl font-extrabold">$16.00</span>
				<span>/ month</span>
			</p>
		</section>

		<section class="font-semibold mt-8 flex items-center justify-center gap-3 mx-auto relative">
			<p class="text-xs text-grayish-blue font-semibold capitalize">Monthly Bill</p>
			<Switch />
			<p class="text-xs text-grayish-blue font-semibold capitalize">Yearly Bill</p>
			<span
				class="bg-primary-light-grayish-red py-0.5 px-1.5 rounded-full text-xs text-primary-light-red absolute -right-2 translate-x-full"
			>
				<span class="md:hidden">-</span>25%
				<span class="hidden md:inline">discount</span>
			</span>
		</section>

		<div class="relative my-8 -mx-6">
			<hr class="w-full absolute left-0" />
		</div>

		<section class="grid md:grid-cols-2 items-center md:justify-between gap-x-20 gap-y-8">
			<Offer />

			<!-- <section class="grid place-items-center self-center mt-8"> -->
			<Button
				pill
				class="!bg-dark-desaturated-blue !text-pale-blue text-xs !font-semibold tracking-wider !px-12 md:!px-8"
				>Start my trial
			</Button>
			<!-- </section> -->
		</section>
	</Card>
</main>

<style>
	.bg {
		background-image: var(--bg-pattern);
	}
</style>
