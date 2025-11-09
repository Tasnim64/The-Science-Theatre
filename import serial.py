import serial
import time

# ---------------- CONFIG ----------------
PORT = "COM6"      # Change to your USB-TTL COM port
BAUD_RATE = 9600   # Must match ESP32 / XBee baud rate
# ----------------------------------------

try:
    # Open serial connection
    ser = serial.Serial(PORT, BAUD_RATE, timeout=1)
    print(f"Listening on {PORT} at {BAUD_RATE} baud...\n")

    while True:
        if ser.in_waiting > 0:
            line = ser.readline().decode(errors='ignore').strip()
            if line:
                print(f"Received: {line}")
        time.sleep(0.1)

except serial.SerialException as e:
    print(f"⚠️ Could not open serial port: {e}")
except KeyboardInterrupt:
    print("\nStopping receiver...")
finally:
    if 'ser' in locals() and ser.is_open:
        ser.close()
        print("Serial port closed.")
