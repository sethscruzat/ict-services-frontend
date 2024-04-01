<script>
  import { onMount } from 'svelte';

  let Equipment = [];
  onMount(async () => {
		const response = await fetch('/api'); 
    Equipment = await response.json()
	});

</script>

<table>
  <tr>
    <th>Equipment ID</th>
    <th>Issued To</th>
    <th>Condition</th>
    <th>Location</th>
    <th>Number of Units</th>
    <th>Remarks</th>
    <th>Status</th>
    <th>Usage Rate</th>
  </tr>
  {#each Equipment as equipment}
    <tr>
      <td>{equipment.equipmentID}</td>
      <td>{equipment.issuedTo}</td>
      <td>{equipment.condition}</td>
      <td>{equipment.location}</td>
      <td>{equipment.noOfUnits}</td>
      <td>{equipment.remarks}</td>
      <td>{equipment.status}</td>
      <td>{equipment.usageRate}</td>
    </tr>
  {/each}
</table>

<style>
  tr,td,th {
    border: 1px solid black;
    margin: 10rem;
    text-align: center;
  }
</style>