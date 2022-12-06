<script lang="ts">
  export let data: { jobs: any[] };
</script>

{#each data.jobs as job}
  <div>
    {job.title}
  </div>
{:else}
  <h1>No jobs found</h1>
{/each}
