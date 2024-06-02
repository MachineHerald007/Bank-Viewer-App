pub struct Util;

impl Util {
    pub fn binary_array_to_int(arr: &[u8]) -> u32 {
        arr.iter().fold(0, |acc, &el| (acc << 8) | u32::from(el))
    }

    pub fn binary_array_to_hex(arr: &[u8]) -> String {
        arr.iter().map(|&el| format!("{:02X}", el)).collect()
    }

    pub fn string_to_char_codes(s: &str) -> String {
        let mut char_codes = String::new();
        for ch in s.chars() {
            let char_code = ch as u16;
            let front = (char_code & 0xFF00) >> 8;
            let back = char_code & 0x00FF;
            char_codes.push_str(&format!("{:02X}{:02X}", back, front));
        }
        char_codes
    }

    // Convert an integer to a hexadecimal string with a '0x' prefix
    pub fn int_to_hex(value: u32) -> String {
        format!("0x{:06X}", value)
    }
}