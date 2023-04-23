use std::{fs::File, io::{BufReader, Cursor}};
use image::io::Reader as ImageReader;
use image::ImageOutputFormat::Png;

#[tauri::command]
pub fn get_image_data(path: String) -> Result<Vec<u8>, String>
{
    match File::open(path) {
        Ok(file) => match ImageReader::new(BufReader::new(file)).with_guessed_format() {
            Ok(reader) => match reader.decode() {
                Ok(image) => {
                    let mut png = Vec::new();

                    let mut cursor = Cursor::new(&mut png);

                    match image.write_to(&mut cursor, Png) {
                        Ok(_) => Ok(png),
                        Err(err) => Err(format!("Error writing PNG data : {}", err))
                    }
                },
                Err(err) => Err(format!("Error while decoding the image : {}", err))
            },
            Err(err) => Err(format!("Error reading image file : {}", err))
        },
        Err(err) => Err(format!("Error opening file : {}", err))
    }
}
