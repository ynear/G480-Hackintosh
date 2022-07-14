const fs = require("fs");
const path = require("path");
const sourceDir =
  "/Users/near/Documents/workspace/zIndex/OpenCore-0.6.3-RELEASE";
const targetDir = "/Users/near/Desktop";
const isDebugger = false;

const changeList = [
  "/X64/EFI/BOOT/BOOTx64.efi",
  "/X64/EFI/OC/Drivers/OpenRuntime.efi",
  "/X64/EFI/OC/OpenCore.efi",
  "/X64/EFI/OC/Tools/OpenShell.efi",
  "/X64/EFI/OC/Resources/Audio",
  "/X64/EFI/OC/Resources/Font",
  "/X64/EFI/OC/Resources/Image",
  "/X64/EFI/OC/Resources/Label",
  "/Docs/Sample.plist",
];

const noChangeList = [
  "/EFI/OC/Drivers/HfsPlusLegacy.efi",
  "/EFI/OC/ACPI/SSDT-EC-LAPTOP.aml",
  "/EFI/OC/ACPI/SSDT-HPET.aml",
  "/EFI/OC/ACPI/SSDT-PNLF.aml",
  "/EFI/OC/ACPI/SSDT-IMEI.aml",
  "/EFI/OC/Kexts/AppleALC.kext",
  "/EFI/OC/Kexts/AtherosE2200Ethernet.kext",
  "/EFI/OC/Kexts/Lilu.kext",
  "/EFI/OC/Kexts/SMCBatteryManager.kext",
  "/EFI/OC/Kexts/SMCLightSensor.kext",
  "/EFI/OC/Kexts/SMCProcessor.kext",
  "/EFI/OC/Kexts/SMCSuperIO.kext",
  "/EFI/OC/Kexts/VirtualSMC.kext",
  "/EFI/OC/Kexts/VoodooPS2Controller.kext",
  "/EFI/OC/Kexts/WhateverGreen.kext",
];

function dirPath(fullPath) {
  return fullPath.replace(/\/[^/]+$/, "");
}

function copyFile(source, target) {
  const dirAbsolutePath = dirPath(target);
  const dirExists = fs.existsSync(dirAbsolutePath);
  if (!dirExists) {
    fs.mkdirSync(dirAbsolutePath, { recursive: true });
  }
  const fileState = fs.statSync(source);
  if (fileState.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    const itemList = fs.readdirSync(source);
    itemList.forEach((item) => {
      copyFile(path.join(source, item), path.join(target, item));
    });
    return;
  }
  if (source.endsWith(".DS_Store")) {
    return;
  }
  fs.copyFileSync(source, target);
}

changeList.forEach((item) => {
  const filePath = path.join(sourceDir, item);
  const fileTargetPath = path.join(
    targetDir,
    item.replace(/(\/X64)|(\/Docs)/g, "")
  );
  copyFile(filePath, fileTargetPath);
});

noChangeList.forEach((item) => {
  const filePath = path.join(isDebugger ? "./Debug" : "./Release", item);
  const fileTargetPath = path.join(targetDir, item);
  copyFile(filePath, fileTargetPath);
});
