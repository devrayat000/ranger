<script lang="ts">
	import check from '$lib/images/icon-check.svg';
</script>

<ul
	class="flex flex-col items-center gap-2.5 text-xs text-grayish-blue font-semibold"
	style:--icon-check="url('{check}')"
>
	<li>Unlimited websiter</li>
	<li>100% data ownership</li>
	<li>Email reports</li>
</ul>

<style lang="css">
	ul {
		list-style: var(--icon-check);
	}
</style>
