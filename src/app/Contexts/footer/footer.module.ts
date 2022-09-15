import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './UI/footer.component';
import { MetadataGateway } from './domain/metadata-gateway';
import { MetadataFirebaseProviderService } from './infraestructure/driven-adapters/firebase-provider.service';
// import { HardcodeProviderService } from './infraestructure/driven-adapters/hardcode-provider.service';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
  providers: [
    { provide: MetadataGateway, useClass: MetadataFirebaseProviderService },
  ],
})
export class FooterModule {}
