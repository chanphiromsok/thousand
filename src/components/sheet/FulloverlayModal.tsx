import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import {
  PropsWithChildren,
  RefObject,
  useCallback,
  useImperativeHandle,
  useRef
} from "react";
import { FullWindowOverlay } from "react-native-screens";
import deviceScreen from "../../platform/deviceScreen";
import { styles } from "./styles";
import useBottomSheetTheme from "../../hook/useBottomSheetTheme";

export interface FullWindowOverlayModalRef {
  expand: () => void;
  close: () => void;
}

interface FullWindowOverlayModalProps {
  ref: RefObject<FullWindowOverlayModalRef | null>;
  onBackdropPress?: () => void;
}

const FullWindowOverlayModal = ({
  ref,
  children,
  onBackdropPress
}: PropsWithChildren<FullWindowOverlayModalProps>) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { bgStyle } = useBottomSheetTheme();

  const backdropComponent = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        onPress={onBackdropPress}
        opacity={1}
        {...props}
        disappearsOnIndex={-1}
      />
    ),
    [onBackdropPress]
  );

  useImperativeHandle(
    ref,
    () => ({
      expand: () => {
        bottomSheetRef.current?.expand();
      },
      close: () => {
        bottomSheetRef.current?.close();
      }
    }),
    []
  );

  return (
    <FullWindowOverlay>
      <BottomSheet
        backdropComponent={backdropComponent}
        handleComponent={() => null}
        ref={bottomSheetRef}
        enableDynamicSizing
        index={-1}
        detached
        style={styles.sheetContainer}
        bottomInset={deviceScreen.height * 0.45}
        enableContentPanningGesture={false}
        backgroundStyle={bgStyle}>
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheet>
    </FullWindowOverlay>
  );
};

export default FullWindowOverlayModal;
