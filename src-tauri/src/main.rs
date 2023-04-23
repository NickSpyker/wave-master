#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod image;

use crate::image::handler::get_image_data;

fn main()
{
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_image_data
        ])
        .run(tauri::generate_context!())
        .expect("error while running application")
}
