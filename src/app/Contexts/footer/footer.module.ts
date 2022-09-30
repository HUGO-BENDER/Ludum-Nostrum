import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// --Translate
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './UI/footer.component';
import { FooterGateway } from './domain/footer-gateway';
import { FooterFirebaseProviderService } from './infraestructure/driven-adapters/firebase-provider.service';
import { FooterBlockComponent } from './UI/footer-block/footer-block.component';
import { FooterProfileComponent } from './UI/footer-profile/footer-profile.component';
// import { HardcodeProviderService } from './infraestructure/driven-adapters/hardcode-provider.service';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, TranslateModule.forChild({})],
  declarations: [FooterComponent, FooterBlockComponent, FooterProfileComponent],
  exports: [FooterComponent],
  providers: [
    { provide: FooterGateway, useClass: FooterFirebaseProviderService },
  ],
})
export class FooterModule {}
