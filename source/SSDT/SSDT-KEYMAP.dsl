DefinitionBlock ("", "SSDT", 2, "HACK", "KEYMAP", 0x00000000)
{
    External (_SB_.PCI0.LPCB.EC0_, DeviceObj)
    External (_SB_.PCI0.LPCB.EC0_.XQ17, MethodObj)    // 0 Arguments
    External (_SB_.PCI0.LPCB.EC0_.XQ1C, MethodObj)    // 0 Arguments
    External (_SB_.PCI0.LPCB.EC0_.XQ1D, MethodObj)    // 0 Arguments
    External (_SB_.PCI0.LPCB.KBD0, DeviceObj)

    Scope (\_SB.PCI0.LPCB.EC0)
    {
        Method (_Q17, 0, NotSerialized)  // _Qxx: EC Query, xx=0x00-0xFF
        {
            If (_OSI ("Darwin"))
            {
                Notify (\_SB.PCI0.LPCB.KBD0, 0x0446)
            }
            Else
            {
                \_SB.PCI0.LPCB.EC0.XQ17 ()
            }
        }

        Method (_Q1C, 0, NotSerialized)  // _Qxx: EC Query, xx=0x00-0xFF
        {
            If (_OSI ("Darwin"))
            {
                Notify (\_SB.PCI0.LPCB.KBD0, 0x0441)
            }
            Else
            {
                \_SB.PCI0.LPCB.EC0.XQ1C ()
            }
        }

        Method (_Q1D, 0, NotSerialized)  // _Qxx: EC Query, xx=0x00-0xFF
        {
            If (_OSI ("Darwin"))
            {
                Notify (\_SB.PCI0.LPCB.KBD0, 0x0442)
            }
            Else
            {
                \_SB.PCI0.LPCB.EC0.XQ1D ()
            }
        }
    }
}