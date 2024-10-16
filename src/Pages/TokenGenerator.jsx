import { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';


const TokenGenerator = () => {
  const [blueTokenCount, setBlueTokenCount] = useState(0);
  const [bluePrefix, setBluePrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(1);
  const [redTokenCount, setRedTokenCount] = useState(0);
  const [redPrefix, setRedPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState(1);
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);

  const generateTokens = () => {
    const newBlueTokens = Array.from({ length: blueTokenCount }, (_, index) => `${bluePrefix}${index + 1}`);
    const newRedTokens = Array.from({ length: redTokenCount }, (_, index) => `${redPrefix}${index + 1}`);
    setBlueTokens(newBlueTokens);
    setRedTokens(newRedTokens);
  };

  const clearTokens = () => {
    setBlueTokenCount(0);
    setBluePrefix('');
    setBlueTokensPerRow(1);
    setRedTokenCount(0);
    setRedPrefix('');
    setRedTokensPerRow(1);
    setBlueTokens([]);
    setRedTokens([]);
  };

  return (
    <div>
      <Typography variant="h4" sx={{color:"black"}}>Token Generator</Typography>
      <Divider variant="middle" sx={{mb:2}} component="li" />
      <form>
        <Grid container spacing={2}>
        <Typography variant="h6" sx={{color:"black", mt:2}}>Blue Token</Typography>
          <Grid item xs={12}>
            <TextField
              label="Number of Blue Tokens"
              type="text"
              value={blueTokenCount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setBlueTokenCount(Number(value));
                }
              }}              
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Blue Token Prefix"
              value={bluePrefix}
              onChange={(e) => setBluePrefix(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Blue Tokens per Row"
              type="text"
              value={blueTokensPerRow}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                    setBlueTokensPerRow(Number(value));
                }
              }}
              fullWidth
            />
          </Grid>

          <Typography variant="h6" sx={{color:"black", mt:2}}>Red Token</Typography>
         

          <Grid item xs={12}>
            <TextField
              label="Number of Red Tokens"
              type="text"
              value={redTokenCount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                    setRedTokenCount(Number(value));
                }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Red Token Prefix"
              value={redPrefix}
              onChange={(e) => setRedPrefix(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Red Tokens per Row"
              type="text"
              value={redTokensPerRow}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                    setRedTokensPerRow(Number(value));
                }
              }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={generateTokens}>
              Generate
            </Button>
            <Button variant="outlined" color="secondary" onClick={clearTokens} style={{ marginLeft: '10px' }}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>

      {blueTokens.length > 0 && (
        <div>
          <Typography variant="h6">Blue Tokens</Typography>
          <Grid container spacing={2}>
            {blueTokens.map((token, index) => (
              <Grid item xs={12 / blueTokensPerRow} key={index}>
                <Button variant="contained" color="primary">
                  {token}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {redTokens.length > 0 && (
        <div>
          <Typography variant="h6">Red Tokens</Typography>
          <Grid container spacing={2}>
            {redTokens.map((token, index) => (
              <Grid item xs={12 / redTokensPerRow} key={index}>
                <Button variant="contained" 
                sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
                >
                  {token}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default TokenGenerator;
