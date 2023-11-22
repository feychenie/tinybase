/// persister-remote

import {OptionalSchemas, Store} from '../store';
import {Persister} from '../persisters';

/// RemotePersister
export interface RemotePersister<Schemas extends OptionalSchemas>
  extends Persister<Schemas> {
  /// RemotePersister.getUrls
  getUrls: () => [string, string];
}

/// createRemotePersister
export function createRemotePersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  loadUrl: string,
  saveUrl: string,
  autoLoadIntervalSeconds?: number,
  onIgnoredError?: (error: any) => void,
  customFetch?: typeof fetch,
): RemotePersister<Schemas>;
