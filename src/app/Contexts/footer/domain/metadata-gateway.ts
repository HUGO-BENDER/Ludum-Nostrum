import { Metadata } from './metadata-model';

export abstract class MetadataGateway{
  abstract getAppMetadata(): Promise<Metadata>
}
