import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LinkComponent } from '../link.component';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/Link',
  // The component related to the Stories
  component: LinkComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [CommonModule, ChipsModule, FormsModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<LinkComponent> = (Values) => ({
  props: Values,
  component: LinkComponent,
  template: `<app-link [values]="values" [disabled]="disabled" [hideCloseIcon]="hideCloseIcon"></app-link>`,
});
// Other stories could be added here as well, all you have to do is export them along!

export const Values = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Values.args = {
  values: ['Default Value'],
  disabled: false,
  hideCloseIcon: false
};