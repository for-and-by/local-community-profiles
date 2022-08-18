import type { LngLatLike } from "maplibre-gl";

import { nanoid } from "nanoid";

import useTypedDispatch from "~/hooks/use-typed-dispatch";
import useTypedSelector from "~/hooks/use-typed-selector";

import map from "~/store/map/actions";
import view from "~/store/view/actions";

import Drawer from "~/components/composites/drawer";

export default function SearchResults() {
  const dispatch = useTypedDispatch();
  const results = useTypedSelector((state) => state.search.results);
  const show = useTypedSelector((state) => state.search.show);

  const handleSetCenter = (center?: LngLatLike) => {
    if (center) {
      dispatch(map.center.set(center));
      dispatch(view.active.reset());
    }
  };

  return (
    <Drawer show={show} position="center" className="mb-2">
      {results?.length ? (
        <Drawer.Row className="bg-base-50">
          <div className="flex max-h-48 w-full flex-col divide-y divide-base-100 overflow-y-scroll">
            {results?.map((feature) => (
              <div
                key={nanoid()}
                className="flex flex-col p-3 hover:cursor-pointer hover:bg-white"
                onClick={() => handleSetCenter(feature?.center)}
              >
                <p className="text-base text-base-700">{feature?.heading}</p>
                <p className="text-sm text-base-400">{feature?.subheading}</p>
              </div>
            ))}
          </div>
        </Drawer.Row>
      ) : null}
    </Drawer>
  );
}