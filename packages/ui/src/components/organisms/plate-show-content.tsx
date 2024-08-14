import { Plate } from "@udecode/plate";
import { PlateContent } from "@udecode/plate-common";

import { plugins } from "@utils/plate-ui/plugins";

const PlateShowContent = ({ content }: { content: any }) => {
  return (
    <Plate readOnly plugins={plugins} initialValue={content}>
      <PlateContent />
    </Plate>
  );
};

export default PlateShowContent;
