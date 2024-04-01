<script>
  import { onMount } from 'svelte';
  import * as Table from "$lib/components/ui/table";
    import { Cell } from '$lib/components/ui/table/index.js';
    // import Table from '$lib/components/ui/table/table.svelte';
    // import { Row } from '$lib/components/ui/table/index.js';

  let Equipment = [];
  onMount(async () => {
		const response = await fetch('/api'); 
    Equipment = await response.json()
	});

</script>

<!-- <table>
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
</table> -->

<Table.Root>
  <Table.Caption>A list of your recent invoices.</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head>Equipment ID</Table.Head>
      <Table.Head>Issued To</Table.Head>
      <Table.Head>Condition</Table.Head>
      <Table.Head>Location</Table.Head>
      <Table.Head>Number of Units</Table.Head>
      <Table.Head>Remarks</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head>Usage Rate</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each Equipment as equipment}
      <Table.Row>
        <Table.Cell>{equipment.equipmentID}</Table.Cell>
        <Table.Cell>{equipment.issuedTo}</Table.Cell>
        <Table.Cell>{equipment.condition}</Table.Cell>
        <Table.Cell>{equipment.location}</Table.Cell>
        <Table.Cell>{equipment.noOfUnits}</Table.Cell>
        <Table.Cell>{equipment.remarks}</Table.Cell>
        <Table.Cell>{equipment.status}</Table.Cell>
        <Table.Cell>{equipment.usageRate}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>

<!-- <style>
  tr,td,th {
    border: 1px solid black;
    margin: 10rem;
    text-align: center;
  }
</style> -->