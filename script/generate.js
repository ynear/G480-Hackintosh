const fs = require("fs");
const path = require("path");
const sourceDir = "/Users/near/Desktop/OpenCore-0.7.9-RELEASE";
const targetDir = "/Users/near/Desktop";

const changeList = [
  "/X64/EFI/BOOT/BOOTx64.efi",
  "/X64/EFI/OC/Drivers/OpenRuntime.efi",
  "/X64/EFI/OC/Drivers/OpenCanopy.efi", // oc gui
  "/X64/EFI/OC/OpenCore.efi",
  "/X64/EFI/OC/Tools/OpenShell.efi",
];

const noChangeList = [
  // Drivers
  "Drivers/HfsPlusLegacy.efi",
  // SSDT
  "ACPI/SSDT-EC-LAPTOP.aml", // 嵌入式控制器
  "ACPI/SSDT-HPET.aml", // 修复 IRQ 冲突
  "ACPI/SSDT-PNLF.aml", // 背光修复
  "ACPI/SSDT-IMEI.aml", // 修复 IMEI
  "ACPI/SSDT-NoHybGfx.aml", // 独立显卡以最低功率运行
  "ACPI/SSDT-KEYMAP.aml", // 亮度快捷键映射
  // Kexts
  "Kexts/AppleALC.kext", // 声卡修补
  "Kexts/AtherosE2200Ethernet.kext", // 有线网卡修补
  "Kexts/IO80211HighSierra.kext", // 无线网卡
  "Kexts/Lilu.kext", // 用于修补进程
  "Kexts/SMCBatteryManager.kext", // 电池读数
  "Kexts/SMCProcessor.kext", // 监控 CPU 温度
  "Kexts/SMCSuperIO.kext", // 监控风扇速度
  "Kexts/USBMapLegacy.kext", // usb定制
  "Kexts/VirtualSMC.kext", // 模拟真实 Mac 上的 SMC 芯片
  "Kexts/VoodooPS2Controller.kext", // PS2 键盘和触控板
  "Kexts/WhateverGreen.kext", // gpu修补
  // Resources
  "Resources",
  // config.plist
  "config.plist",
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
  const filePath = path.join(__dirname, "../source/OC", item);
  const fileTargetPath = path.join(targetDir, "EFI/OC", item);
  copyFile(filePath, fileTargetPath);
});
