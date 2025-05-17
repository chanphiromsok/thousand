import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import React, {
  forwardRef,
  PropsWithChildren,
  RefObject,
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import device from "../../platform/device";
import DelayedFreeze from "../views/DelayFreezed";
import { styles } from "./styles";
import useBottomSheetTheme from "../../hook/useBottomSheetTheme";

export interface DynamicBottomSheetRef {
  present: () => void;
  dismiss: () => void;
}
interface DynamicBottomSheetProps {
  lazy?: boolean;
}
const DynamicBottomSheet = forwardRef<
  DynamicBottomSheetRef,
  PropsWithChildren<DynamicBottomSheetProps>
>(({ lazy = false, children }, ref) => {
  const { bgStyle, indicatorStyle } = useBottomSheetTheme();
  const sheetRef = useRef(null) as RefObject<BottomSheetModal | null>;
  const { height } = device;
  const [isContentLoaded, setIsContentLoaded] = useState(!lazy);
  useImperativeHandle(
    ref,
    () => ({
      present: () => {
        if (!isContentLoaded) {
          setIsContentLoaded(true);
        }
        sheetRef.current?.present();
      },
      dismiss: () => {
        sheetRef.current?.dismiss();
        setIsContentLoaded(false); // Reset content state when dismissed
      }
    }),
    [isContentLoaded]
  );

  const backdropComponent = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop opacity={1} {...props} disappearsOnIndex={-1} />
    ),
    []
  );

  return (
    <BottomSheetModal
      backdropComponent={backdropComponent}
      ref={sheetRef}
      enableDynamicSizing
      handleStyle={[styles.handleStyle, bgStyle]}
      handleIndicatorStyle={indicatorStyle}
      enableContentPanningGesture={false}
      backgroundStyle={bgStyle}
      maxDynamicContentSize={height / 2}>
      <DelayedFreeze freeze={!isContentLoaded}>
        <BottomSheetView>{children}</BottomSheetView>
      </DelayedFreeze>
    </BottomSheetModal>
  );
});
export default DynamicBottomSheet;
