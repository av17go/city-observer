# Purple Rectangle Component

A simple purple rectangle component with rounded corners for visual decoration.

## Usage

Import the module and include in your template:

```typescript
import { PurpleRectangleModule } from './purple-rectangle';

@NgModule({
  imports: [PurpleRectangleModule]
})
export class AppModule {}
```

Or use standalone:

```typescript
import { PurpleRectangleComponent } from './purple-rectangle';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>This is a demo.</p>
      <purple-rectangle></purple-rectangle>
    </div>
  `,
  standalone: true,
  imports: [PurpleRectangleComponent]
})
export class AppComponent {}
```
