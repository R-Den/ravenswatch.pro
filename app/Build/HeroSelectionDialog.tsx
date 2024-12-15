import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const HeroSelectionDialog = ({
  isOpen,
  onClose,
  onClearAll,
  onClearTalentsOnly,
  selectedHeroName,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Change Hero Selection</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to select {selectedHeroName}. This will clear your
            current build. Would you like to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose}>
            No, keep current build
          </Button>
          <Button variant="secondary" onClick={onClearTalentsOnly}>
            Clear talents only
          </Button>
          <Button variant="default" onClick={onClearAll}>
            Clear all
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default HeroSelectionDialog;
