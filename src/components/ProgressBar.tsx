import { Progress } from '@mantine/core';

export function ProgressBar () {
  let numbers = [35, 25, 15, 25];
  return (
    <Progress.Root size="30">
      <Progress.Section value={numbers[0]} color="gray" style={{borderColor:"gray", borderStyle: 'solid'}}>
        <Progress.Label>Deboarding</Progress.Label>
      </Progress.Section>
      <Progress.Section value={numbers[1]} color="gray" style={{borderColor:"gray", borderStyle: 'solid'}}>
        <Progress.Label>Cleaning</Progress.Label>
      </Progress.Section>
      <Progress.Section value={numbers[2]} color="gray" style={{borderColor:"gray", borderStyle: 'solid'}}>
        <Progress.Label>Tanking</Progress.Label>
      </Progress.Section>
      <Progress.Section value={numbers[3]} color="gray" style={{borderColor:"gray", borderStyle: 'solid'}}>
        <Progress.Label>Inspection</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}