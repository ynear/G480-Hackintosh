### 系统

10.13.6

### cpu

Sandy Bridge 10.6.7 - 10.13.6 id: 0x0206A0(M/H)

### gpu

- Sandy Bridge(HD 3000)

  - 10.6.7 - 10.13.6

- Fermi(Geforce GT 610m)

  - 10.7.x - 10.13.6
  - Requires NVCAP patching
  - BIOS device id: `\_SB.PCI0.PEG0.PEGP`

### 网卡

- 有线网卡

  - Atheros AR8162/8166/8168 PCI-E

- 无线网卡

  - Qualcomm Atheros AR9485 Wireless Network Adapte

### 主板

inter HM76

### 声卡

Realtek ALC269

`layoutId = 8`

`PciRoot(0x0)/Pci(0x1B,0x0)`

```
0x100203, 0x100004, 0x100202, 0x100100, layout 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 39, 40, 44, 45, 47, 55, 58, 66, 69, 76, 77, 88, 91, 93, 99, 100, 127, 128, 188
```

### 快捷键映射

| 按键            | 功能                 | EC    | PS2       | 支持    | 备注                          |
| --------------- | -------------------- | ----- | --------- | ------- | ----------------------------- |
| `fn` + `f1`     | 睡眠                 | `Q17` |           |         |                               |
| `fn` + `f2`     | 关闭显示器           | `Q5C` |           | &#9745; |                               |
| `fn` + `f3`     | 切换显示器           | `Q19` | `e029=80` |         |                               |
| `fn` + `f5`     | 飞行模式             | `Q28` |           |         |                               |
| `fn` + `f6`     | 关闭触摸板           | `Q22` |           | &#9745; |                               |
| `fn` + `f9`     | 播放暂停             |       | `e022=34` | &#9745; |                               |
| `fn` + `f10`    | 停止播放             |       | `e024=80` |         | 已禁用                        |
| `fn` + `f11`    | 上一曲               |       | `e010=4d` | &#9745; |                               |
| `fn` + `f12`    | 下一曲               |       | `e019=42` | &#9745; |                               |
| `fn` + `up`     | 亮度加               | `Q1C` |           |         | `source/SSDT/SSDT-KEYMAP.dsl` |
| `fn` + `down`   | 亮度减               | `Q1D` |           |         | `source/SSDT/SSDT-KEYMAP.dsl` |
| `fn` + `left`   | 音量减               |       | `e02e=49` | &#9745; |                               |
| `fn` + `right`  | 音量加               |       | `e030=48` | &#9745; |                               |
| `PrtSc`         | 屏幕打印键           |       | `e037=69` | &#9745; | 需配合系统偏好设置            |
| `Home`          | 使光标跳转到该行行首 |       | `e047=73` | &#9745; |                               |
| `End`           | 使光标跳转到该行行尾 |       | `e04f=77` | &#9745; |                               |
| `PgUp`          | 上翻页键             |       | `e049=74` | &#9745; |                               |
| `PgDown`        | 下翻页键             |       | `e051=79` | &#9745; |                               |
| `fn` + `PrtSc`  | 屏幕打印键           |       | `e037=69` | &#9745; | 需配合系统偏好设置            |
| `fn` + `Home`   | Pause 暂停           |       | `e045=71` |         | 已禁止                        |
| `fn` + `End`    | Break 中断           |       | `e046=80` |         | 已禁止                        |
| `fn` + `PgUp`   | ScrLK 滚动锁定       |       | `46=6b`   |         | 已禁止                        |
| `fn` + `PgDown` | Insert 插入覆盖      |       | `e052=92` | &#9745; |                               |

> 1. 通过 SSDT 将`Q1C`映射到`e041`, 将`Q1D`映射到`e042`, 修改`Release/EFI/OC/Kexts/VoodooPS2Controller.kext/Contents/PlugIns/VoodooPS2Keyboard.kext/Contents/Info.plist`, 添加
>
>    ```
>    <string>46=80</string> // 禁止 `fn` + `PgUp`
>    <string>e045=80</string> // 禁止 `fn` + `Home`
>    <string>e046=80</string> // 禁止 `fn` + `End`
>    <string>e041=71</string>
>    <string>e042=6b</string>
>    ```
>
> 2. config.plist => ACPI => Patch 中添加重命名, 来帮助`source/SSDT/SSDT-KEYMAP.dsl`

```

### SMBIOS

- MacBookAir4,1 Sandy Bridge(M) HD 3000 (11") Mac-C08A6BB70A942AC2 10.7 (11A2063) 10.13.6
- MacBookAir4,2 Sandy Bridge(M) HD 3000 (13") Mac-742912EFDBEE19B3 10.7 (11A2063) 10.13.6
- MacBookPro8,1 Sandy Bridge(M) HD 3000 (13") Mac-94245B3640C91C81 10.6.6 (10J3210) 10.13.6 \*

- MacBookPro8,2 Sandy Bridge(QM) HD 3000/Radeon HD 6490M (15") Mac-94245A3940C91C80 10.6.6 (10J3210) 10.13.6
- MacBookPro8,3 Sandy Bridge(QM) HD 3000/Radeon HD 6750M (17") Mac-942459F5819B171B 10.6.6 (10J3210) 10.13.6
- Macmini5,1 Sandy Bridge(M) HD 3000 Mac-8ED6AF5B48C039E1 10.7 (11A2061) 10.13.6
- Macmini5,3 Sandy Bridge(QM) HD 3000 Mac-7BA5B2794B2CDB12 10.7 (11A2061) 10.13.6
```
